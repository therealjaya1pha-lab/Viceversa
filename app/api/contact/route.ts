import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  childName: z.string().optional(),
  childAge: z.string().optional(),
  preferredService: z.string().optional(),
  preferredTime: z.string().optional(),
  insurance: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Console notification / email simulation for Vice Versa Speech and Language Services
    console.log('[API ROUTE - EMAIL NOTIFICATION SENT]');
    console.log('To: info@viceversaspeech.com');
    console.log('From:', validatedData.email);
    console.log('Subject:', `[NEW INQUIRY] ${validatedData.subject}`);
    console.log('Details:', validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Ana Vega and the Vice Versa clinical team will contact you within 24 business hours.',
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Server error processing contact request' },
      { status: 500 }
    );
  }
}
