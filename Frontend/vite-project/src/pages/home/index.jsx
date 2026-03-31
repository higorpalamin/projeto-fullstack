import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash-icon.png'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([]) 

  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

  async function getUsers(){
    const dataFromApi = await api.get('/usuarios')
    setUsers(dataFromApi.data)
  }
  
  async function createUsers(){
    await api.post('/usuarios',{
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: Number(inputAge.current.value)
    })

    inputName.current.value = ''
    inputEmail.current.value = ''
    inputAge.current.value = ''
    getUsers() //atualizar a tela
  }

  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`)
    getUsers() //atualizar tela
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de Usuários</h1>
            <input type="text" name="Nome" id="inome" placeholder='Nome' ref={inputName} />
            <input type="email" name="Email" id="iemail" placeholder='Email'ref={inputEmail} />
            <input type="number" name="Idade" id="iidade" placeholder='Idade'ref={inputAge} />
            <button type="button" onClick={createUsers}>Salvar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome:  <span>{user.name}</span></p>
              <p>Email: <span>{user.email}</span></p>
              <p>Idade: <span>{user.age}</span></p>
            </div>
            <div className='button'>
              <button onClick={ () => deleteUsers(user.id)}>
                <img src={Trash} />
              </button>
            </div>            
          </div>
        ))}

        
      </div>
    </>
  )
}

export default Home
