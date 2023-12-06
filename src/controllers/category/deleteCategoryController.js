const { deleteCategoryService } = require("../../services/category");

const deleteCategoryController = {
    async handle(req, res) {
        try {
            const { categoria } = req.body;
            const deleted = await deleteCategoryService.execute(categoria)
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno no servidor' });
        }
    }
};

module.exports = deleteCategoryController;