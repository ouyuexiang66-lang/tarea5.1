export const apiLogger = (mensaje: string) => {
  const fecha = new Date().toLocaleString();
  console.log(`[API LOG ${fecha}]: ${mensaje}`);
};