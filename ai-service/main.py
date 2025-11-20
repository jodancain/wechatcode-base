from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

# --- Pydantic Models for request body validation ---
class MetricData(BaseModel):
    type: str
    value: float

class DietData(BaseModel):
    trafficLight: str

class HealthDataPayload(BaseModel):
    metrics: List[MetricData]
    diets: List[DietData]

class RiskResponse(BaseModel):
    riskLevel: str
    message: str

# --- AI Risk Analysis Logic (Simplified) ---
HIGH_URIC_ACID_THRESHOLD = 420
RECENT_RECORDS_COUNT = 5

@app.post("/analyze-risk", response_model=RiskResponse)
def analyze_risk(data: HealthDataPayload):
    """
    Analyzes the patient's recent health data to determine a risk level.
    This is a simplified simulation of a risk model.
    """
    recent_metrics = data.metrics[:RECENT_RECORDS_COUNT]
    recent_diets = data.diets[:RECENT_RECORDS_COUNT]

    high_uric_acid_count = sum(
        1 for m in recent_metrics if m.type == 'uric_acid' and m.value > HIGH_URIC_ACID_THRESHOLD
    )

    red_light_diet_count = sum(
        1 for d in recent_diets if d.trafficLight == 'red'
    )

    if high_uric_acid_count >= 3:
        return RiskResponse(
            riskLevel="High",
            message=f"风险预警：最近{len(recent_metrics)}次记录中有 {high_uric_acid_count} 次血尿酸值高于 {HIGH_URIC_ACID_THRESHOLD}μmol/L。"
        )

    if red_light_diet_count >= 3:
        return RiskResponse(
            riskLevel="High",
            message=f"风险预警：最近{len(recent_diets)}次记录中有 {red_light_diet_count} 次为“红灯”饮食。"
        )

    return RiskResponse(
        riskLevel="Low",
        message="当前指标稳定，请继续保持。"
    )

@app.get("/")
def read_root():
    return {"message": "AI Risk Analysis Service is running."}

# To run this service:
# 1. pip install -r requirements.txt
# 2. uvicorn main:app --reload --port 8000
