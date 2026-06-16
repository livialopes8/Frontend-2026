import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./RequerimentoForm.css";

function RequerimentoForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  function onSubmit(dados) {
    console.log("Requerimento enviado:", dados);
    reset();
  }

  return (
    <div className="form-container">
      <h2>Novo Requerimento</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>Tipo de Requerimento</label>
          <select {...register("tipo", { required: "Tipo é obrigatório" })}>
            <option value="">Selecione um tipo...</option>
            <option value="declaracao">Declaração de matrícula</option>
            <option value="historico">Histórico escolar</option>
            <option value="boleto">Segunda via de boleto</option>
          </select>
          {errors.tipo && <span className="erro">{errors.tipo.message}</span>}
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            {...register("descricao", {
              required: "Descrição é obrigatório",
              minLength: { value: 10, message: "Descrição deve ter no mínimo 10 caracteres" },
            })}
          />
          {errors.descricao && <span className="erro">{errors.descricao.message}</span>}
        </div>

        <div className="form-group">
          <label>Data do Requerimento</label>
          <input type="date" {...register("data", { required: "Data é obrigatória" })} />
          {errors.data && <span className="erro">{errors.data.message}</span>}
        </div>

        <div className="form-botoes">
          <button type="button" className="btn-cancelar" onClick={() => navigate("/requerimentos")}>
            Cancelar
          </button>
          <button type="submit" className="btn-salvar">
            Salvar
          </button>
        </div>

      </form>
    </div>
  );
}

export default RequerimentoForm;