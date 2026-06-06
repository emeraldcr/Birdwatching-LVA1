// Funciones utilitarias

/**
 * Convierte un mensaje a formato de URL para WhatsApp
 */
export const getWhatsAppLink = (message: string, phoneNumber: string = '50687654321'): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
};

/**
 * Formatea una cadena para usar como slug de URL
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Formatea moneda en formato legible
 */
export const formatCurrency = (amount: number, currency: 'CRC' | 'USD' = 'USD'): string => {
  const formatter = new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  });
  return formatter.format(amount);
};

/**
 * Obtiene la distancia estimada en formato legible
 */
export const formatDistance = (km: number): string => {
  return `${km.toFixed(1)} km`;
};

/**
 * Convierte tiempo en formato legible
 */
export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) return `${mins} minutos`;
  if (mins === 0) return `${hours} hora${hours > 1 ? 's' : ''}`;
  return `${hours}h ${mins}m`;
};

/**
 * Genera un ID único simple
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Verifica si una URL es absoluta
 */
export const isAbsoluteUrl = (url: string): boolean => {
  return /^https?:\/\//.test(url);
};

/**
 * Obtiene el nombre legible de una aves categoría
 */
export const getBirdCategoryLabel = (id: string): string => {
  const labels: Record<string, string> = {
    trogons: 'Trogones',
    motmots: 'Momotos',
    tanagers: 'Tangaras',
    hummingbirds: 'Colibríes',
    toucans: 'Tucanes',
    raptors: 'Rapaces',
    'forest-birds': 'Aves de bosque',
    'open-area-birds': 'Aves de áreas abiertas',
  };
  return labels[id] || 'Aves';
};
