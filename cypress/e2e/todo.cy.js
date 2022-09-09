context("Todo", () => {
  it("adicionar uma nova tarefa", () => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get("input.new-todo")
      .type("Estudar automação de testes")
      .type("{enter}");

    cy.get("input.new-todo").type("Estudar banco de dados").type("{enter}");

    cy.get("input.new-todo").type("Estudar tipos de testes").type("{enter}");
  });
});
