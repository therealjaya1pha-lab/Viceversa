'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useApp } from '@/context/AppContext';
import {
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Send,
  Sparkles,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { toast } from 'sonner';

// Zod Validation Schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .regex(/^[\d\s\-\+\(\)]+$/, { message: 'Please enter a valid phone number.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
  childName: z.string().optional(),
  childAge: z.string().optional(),
  preferredService: z.string().optional(),
  preferredTime: z.string().optional(),
  insurance: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function MultiStepContactForm() {
  const { language } = useApp();
  const isEs = language === 'es';

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      childName: '',
      childAge: '',
      preferredService: 'Speech Sound & Articulation Therapy',
      preferredTime: 'Morning (8:00 AM - 12:00 PM)',
      insurance: 'Medicaid (Texas)',
    },
  });

  // Validate step before proceeding
  const handleNextStep = async () => {
    let fieldsToValidate: (keyof ContactFormData)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ['name', 'email', 'phone'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['subject'];
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        toast.success(
          isEs
            ? '¡Formulario enviado con éxito! Ana Vega se pondrá en contacto pronto.'
            : 'Form submitted successfully! Ana Vega will contact you shortly.'
        );
        reset();
      } else {
        toast.error(
          result.message || (isEs ? 'Error al enviar el formulario.' : 'Failed to send contact message.')
        );
      }
    } catch (err) {
      toast.error(isEs ? 'Error de conexión. Inténtelo de nuevo.' : 'Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-[#9C1D38] text-white p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest bg-white/20 font-bold px-3 py-1 rounded-full text-red-100">
              {isEs ? 'Formulario Interactivo' : 'Multi-Step Contact Inquiry'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif mt-2">
              {isEs ? 'Envíenos su Consulta Clínica' : 'Send Vice Versa a Direct Inquiry'}
            </h3>
          </div>
          <div className="hidden sm:flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-bold text-red-100">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>{isEs ? 'HIPAA Seguro' : 'HIPAA Compliant'}</span>
          </div>
        </div>

        {/* Step Progress Bar */}
        {!isSuccess && (
          <div className="mt-6 flex items-center justify-between text-xs font-bold text-red-100">
            <div
              className={`flex items-center space-x-2 ${
                currentStep >= 1 ? 'text-white' : 'opacity-50'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  currentStep >= 1 ? 'bg-white text-[#9C1D38]' : 'bg-white/20 text-white'
                }`}
              >
                1
              </span>
              <span className="hidden sm:inline">{isEs ? 'Contacto' : 'Contact'}</span>
            </div>
            <div className="h-0.5 flex-1 mx-3 bg-white/20">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />
            </div>

            <div
              className={`flex items-center space-x-2 ${
                currentStep >= 2 ? 'text-white' : 'opacity-50'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  currentStep >= 2 ? 'bg-white text-[#9C1D38]' : 'bg-white/20 text-white'
                }`}
              >
                2
              </span>
              <span className="hidden sm:inline">{isEs ? 'Detalles' : 'Details'}</span>
            </div>
            <div className="h-0.5 flex-1 mx-3 bg-white/20">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${(currentStep === 3 ? 1 : 0) * 100}%` }}
              />
            </div>

            <div
              className={`flex items-center space-x-2 ${
                currentStep === 3 ? 'text-white' : 'opacity-50'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  currentStep === 3 ? 'bg-white text-[#9C1D38]' : 'bg-white/20 text-white'
                }`}
              >
                3
              </span>
              <span className="hidden sm:inline">{isEs ? 'Mensaje' : 'Message'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Form Content Body */}
      <div className="p-6 sm:p-8">
        {isSuccess ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#2B2B2B] font-serif">
              {isEs ? '¡Consulta Recibida con Éxito!' : 'Inquiry Received Successfully!'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              {isEs
                ? 'Gracias por comunicarse con Vice Versa. Ana Vega y nuestro equipo clínico revisarán sus datos y le responderán en un plazo máximo de 24 horas hábiles.'
                : 'Thank you for reaching out to Vice Versa. Ana Vega and our clinical team will review your inquiry and reach out within 24 business hours.'}
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                setCurrentStep(1);
              }}
              className="mt-4 inline-flex items-center space-x-2 bg-[#9C1D38] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#7A1429]"
            >
              <span>{isEs ? 'Enviar otra consulta' : 'Send Another Inquiry'}</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* STEP 1: Parent & Contact Info */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider border-b border-gray-100 pb-2">
                  {isEs ? 'Paso 1: Información del Solicitante' : 'Step 1: Contact Information'}
                </h4>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {isEs ? 'Nombre Completo *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Jane Doe"
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg border text-xs outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 bg-red-50/30 focus:ring-1 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-1 focus:ring-[#9C1D38]'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Correo Electrónico *' : 'Email Address *'}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="parent@example.com"
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg border text-xs outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 bg-red-50/30 focus:ring-1 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-1 focus:ring-[#9C1D38]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Teléfono Directo *' : 'Phone Number *'}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="(469) 320-1700"
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg border text-xs outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/30 focus:ring-1 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-1 focus:ring-[#9C1D38]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Service & Child Details */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider border-b border-gray-100 pb-2">
                  {isEs ? 'Paso 2: Detalles de la Consulta' : 'Step 2: Service & Child Information'}
                </h4>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {isEs ? 'Asunto de la Consulta *' : 'Subject of Inquiry *'}
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      {...register('subject')}
                      type="text"
                      placeholder="e.g. Speech Evaluation Request for 3-year-old"
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg border text-xs outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500 bg-red-50/30 focus:ring-1 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-1 focus:ring-[#9C1D38]'
                      }`}
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject.message}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Nombre del Niño(a)' : "Child's Name (Optional)"}
                    </label>
                    <input
                      {...register('childName')}
                      type="text"
                      placeholder="Child's Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Edad del Niño(a)' : "Child's Age"}
                    </label>
                    <input
                      {...register('childAge')}
                      type="text"
                      placeholder="e.g. 2.5 years"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Servicio Deseado' : 'Therapy Service Requested'}
                    </label>
                    <select
                      {...register('preferredService')}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38] bg-white"
                    >
                      <option value="Speech Sound & Articulation Therapy">Speech Sound & Articulation</option>
                      <option value="AEIOU & SOS Feeding Therapy">AEIOU & SOS Feeding Therapy</option>
                      <option value="Receptive & Expressive Language">Receptive & Expressive Language</option>
                      <option value="Orton-Gillingham Reading Program">Orton-Gillingham Reading</option>
                      <option value="Language of Learning Nannies (LOLN)">LOLN Nanny Coaching</option>
                      <option value="EmpowerEd & Empower U Programs">EmpowerEd & Empower U</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Seguro Médico' : 'Insurance Carrier'}
                    </label>
                    <select
                      {...register('insurance')}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38] bg-white"
                    >
                      <option value="Medicaid (Texas)">Medicaid (Texas)</option>
                      <option value="Superior HealthPlan">Superior HealthPlan</option>
                      <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                      <option value="Aetna">Aetna</option>
                      <option value="Cigna">Cigna</option>
                      <option value="UnitedHealthcare">UnitedHealthcare</option>
                      <option value="Private Pay / Self-Pay">Private Pay / Self-Pay</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Message & Schedule */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider border-b border-gray-100 pb-2">
                  {isEs ? 'Paso 3: Mensaje y Horario Preferido' : 'Step 3: Message & Scheduling Preferences'}
                </h4>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {isEs ? 'Mensaje Detallado *' : 'Detailed Message *'}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder={
                      isEs
                        ? 'Por favor describa las inquietudes sobre el habla, lenguaje o alimentación de su hijo(a)...'
                        : 'Please describe your concerns regarding speech, language, feeding, or reading milestones...'
                    }
                    className={`w-full p-3.5 rounded-lg border text-xs outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 bg-red-50/30 focus:ring-1 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-1 focus:ring-[#9C1D38]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {isEs ? 'Horario Preferido para Llamada' : 'Preferred Callback Time'}
                  </label>
                  <select
                    {...register('preferredTime')}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38] bg-white"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                  </select>
                </div>

                {/* Real-time Summary Review */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-xs space-y-1 text-gray-700">
                  <p className="font-bold text-[#2B2B2B] uppercase tracking-wider text-[10px]">
                    {isEs ? 'Resumen de la Consulta:' : 'Summary Review:'}
                  </p>
                  <p><strong>{getValues('name')}</strong> ({getValues('email')} • {getValues('phone')})</p>
                  <p><strong>Subject:</strong> {getValues('subject')}</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center space-x-1 px-4 py-2 rounded-lg border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isEs ? 'Anterior' : 'Back'}</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center space-x-1 bg-[#9C1D38] hover:bg-[#7A1429] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>{isEs ? 'Siguiente' : 'Next Step'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center space-x-2 bg-[#9C1D38] hover:bg-[#7A1429] text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isEs ? 'ENVIANDO...' : 'SENDING...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isEs ? 'ENVIAR CONSULTA' : 'SUBMIT INQUIRY'}</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
