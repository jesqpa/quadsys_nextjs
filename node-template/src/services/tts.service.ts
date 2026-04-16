export class TtsService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;

  /**
   * Genera un anuncio de voz para un turno.
   * Prioriza Azure/Cloud TTS (pendiente integración API) y hace fallback a Web Speech API.
   */
  static async announceTicket(ticketNumber: string, stationName: string) {
    if (!this.synth) return;

    // TODO: Integración con Azure Neural TTS vía API interna
    // const audioBlob = await getAzureTts(text);

    // Fallback: Web Speech API
    const utterance = new SpeechSynthesisUtterance();
    
    // Mejorar gramática para que suene natural en español
    const cleanNumber = ticketNumber.split('').join(' '); // A 1 2 en lugar de A doce
    utterance.text = `Turno: ${cleanNumber}. Por favor diríjase a: ${stationName}`;
    
    utterance.lang = 'es-MX';
    utterance.rate = 0.9; // Un poco más lento para claridad
    utterance.pitch = 1.1; // Un poco más agudo para sonar "profesional"

    this.synth.cancel(); // Detener anuncios previos
    this.synth.speak(utterance);
    
    // Efecto visual de "Llamando"
    console.log(`[TTS] Anunciando: ${utterance.text}`);
  }
}
