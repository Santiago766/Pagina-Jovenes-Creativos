import { useState } from "react"
import { Input } from "../Input"
import './FormEdit.css'
import { Update } from "../../API/API_Services"


export const FormEdit = ({ edit }) => {

  const selected = JSON.parse(globalThis.localStorage.getItem('task'))

  const handleChange = ({ target }) => {
    setUpdate(state => {
      return {
        ...state,
        [target.name]: target.value
      }
    })
  }

  const [update, setUpdate] = useState({
    _id: selected._id,
    name: null,
    description: null,
    finishDate: null,
    isCompleted: selected.isCompleted,
    userId: selected.userId
  })

  const handleSubmit = () => {
    Update(update)
  }
  return (
    <div className="formEdit">
      <div className="formEditContent">
        <form className="form" onSubmit={handleSubmit} >
          <div className="titleContent">
            <div className="titleForm">
            <h1>Editar Tarea</h1>
            </div>
            <div className='formClose'>
              <i className="fa-regular fa-circle-xmark"
                onClick={edit}></i>
            </div>
          </div>

          <Input className={"create"}
            placeHolder={"Task Name"}
            Name={"name"}
            type={"text"}
            onChange={handleChange}
          />

          <Input className={"create"}
            placeHolder={"Description"}
            Name={"description"}
            type={"text"}
            onChange={handleChange}
          />

          <Input
            className={"create"}
            placeHolder={"Finish Date"}
            Name={"finishDate"}
            type={"date"}
            onChange={handleChange}
          />

          <button type="submit">Editar Tarea</button>
        </form>
      </div>
    </div>
  )
}