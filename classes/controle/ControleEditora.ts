// ControleEditora.ts

class ControleEditora {
  adicionarEditora(novaEditora: any) {
    throw new Error('Method not implemented.');
  }
  private static editoras = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
    // ... outras editoras
  ];

  public getEditoras() {
    return ControleEditora.editoras;
  }

  public getNomeEditora(codEditora: number): string | undefined {
    const editora = ControleEditora.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

// const controleEditora = new ControleEditora();
export default ControleEditora;
