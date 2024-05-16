export const paypalConfig = {
  clientId: 'AYhjZw70lgUP5FAaDbmaBTaqdcfphvBN3ba7QlJU0zz9kjPm9AXT3xsf-V86pjkSAj_uYNOTod452WV4',
  locale: 'es_ES', // Código de localización para español (España)
};

export function loadPayPalScript() {
  return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = `https://www.paypal.com/sdk/js?client-id=${paypalConfig.clientId}&locale=${paypalConfig.locale}`;
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.body.appendChild(scriptElement);
  });
}