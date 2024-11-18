import { useEffect } from "react"
import { supabase } from "../SupaBase/client"
import { useNavigate } from "react-router-dom"
import Inicio from "./Inicio"

function Home() {
  const navigate = useNavigate();
  useEffect(() =>{
    if(!supabase.auth.getUser()) {
      navigate("/Login");
    }
  }, [navigate]);

  return (
    <div>
      
      <Inicio />
      
      
    </div>
  )
}

export default Home