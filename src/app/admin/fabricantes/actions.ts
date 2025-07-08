'use server';

import { revalidatePath } from 'next/cache';

// Simula a exclusão de um fabricante. Em uma aplicação real,
// isso interagiria com um banco de dados.
export async function deleteManufacturer(name: string) {
  console.log(`Excluindo fabricante: ${name}`);

  // Simula um atraso de rede
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Após a exclusão, revalida o cache da página para refletir a mudança.
  revalidatePath('/admin/fabricantes');

  return { success: true, message: `Fabricante "${name}" excluído com sucesso.` };
}
