function ProjectForm() {
return (
    <form>

        <div>
        <input type="text" placeholder="Insira o nome do projeto" />
        <input type="text" placeholder="Insira o orçamento total" />
        </div>

        <div>
        <select name="category_id">
            <option disabled>Selecione a categoria</option>
        </select>
        </div>
        <div>
            <input type="submit" value="criar Projeto" />
        </div>

    </form>
)
}

export default ProjectForm