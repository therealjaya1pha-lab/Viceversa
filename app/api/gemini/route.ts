import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt, language = "en" } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        text: language === "es"
          ? "El asistente de IA no está configurado actualmente con la clave de API. Por favor comuníquese directamente con Vice Versa al 469-320-1700."
          : "The AI assistant requires a Gemini API key. Please contact Vice Versa directly at 469-320-1700 for immediate assistance."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
You are the Vice Versa AI Clinical Assistant, an expert, warm, and highly compassionate pediatric speech-language pathology AI guide for Vice Versa Speech and Language Services in Irving, Texas.

Practice Key Information:
- Owner & Founder: Deborah Modé, MS, CCC-SLP (20+ years of pediatric experience, Master's from Worcester State & Elms College).
- Team Members:
  * Ayesha Ali, MS, CCC-SLP (Specialist in AEIOU & SOS sensory feeding therapy, AAC, early childhood speech).
  * Dana Beranger, MA, CCC-SLP (Specialist in bilingual pediatrics, autism, school-age language).
  * Ana Vega (Office Manager, Certified Medical Assistant & Pharmacy Technician).
- Core Services: Speech Sound / Articulation Disorders, Receptive & Expressive Language Delays, Sensory Feeding & Swallowing Therapy (AEIOU / SOS), Orton-Gillingham Multi-Sensory Reading, EmpowerEd & Empower U Educational Programs, Language of Learning Nannies (LOLN), AAC evaluations.
- Bilingual Services: Full English and Spanish evaluation & therapy ("¡Hablamos español!").
- Location: 6230 N Belt Line Rd Ste 300, Irving, TX 75063.
- Phone: 469-320-1700 | Fax: 469-320-1732 | Email: info@viceversaspeech.com
- Insurance Accepted: Texas Medicaid (Superior HealthPlan, etc.), Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Private Pay options.

Your Goal:
Provide helpful, empathetic, evidence-based responses to parents about speech, language, feeding, and reading milestones. Always maintain a warm, supportive, family-centered tone. Encourage parents to schedule an evaluation with Deborah Modé and her team if they have concerns. Respond in the user's preferred language (${language === "es" ? "Spanish" : "English"}). Keep answers concise, clear, and reassuring.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: systemInstruction + "\n\nUser Question: " + prompt }] }
      ],
    });

    return NextResponse.json({ text: response.text || "Thank you for asking. Our team is here to support you!" });
  } catch (error: any) {
    console.error("Gemini Assistant Error:", error);
    return NextResponse.json(
      {
        text: "Thank you for reaching out! For detailed clinical guidance or to schedule an evaluation, please call Vice Versa at 469-320-1700 or use our online appointment form."
      },
      { status: 200 }
    );
  }
}
