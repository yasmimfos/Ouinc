const connect = require("../../connect/connect");

const balance = async (req, res) => {
    const { id } = req.userLogged;

    try {
        const list = await connect('transacoes').select('descricao', 'valor', 'categoria', 'data').where({ usuario_id: id });
        if (list < 1) {
            return res.status(404).json({ mensagem: 'Não há transações registradas' });
        };
        return res.json(list);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };

};

module.exports = balance;