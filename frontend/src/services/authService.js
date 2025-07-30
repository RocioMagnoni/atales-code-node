/*
const API_URL = "http://localhost:3000/api";

export const registerUser = async (user) => {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message || "Error en el registro" };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error?.message || "Error de red o del servidor",
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message || "Error en el login" };
    }

    const user = await res.json();
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error?.message || "Error de red o del servidor",
    };
  }
};

*/

//const API_URL = "http://localhost:3000/api"; //--> no lo vamos a necesitar

/**/
export const registerUser = async (user) => {
  try {
    const res = await fetch('/api/register', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.message || "Error en el registro" };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error?.message || "Error de red o del servidor",
    };
  }
};


export const loginUser = async (email, password) => {
  try {
    const res = await fetch('/api/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    // Verificamos el tipo de contenido
    const contentType = res.headers.get("content-type");

    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      // Si no es JSON, leemos como texto para depurar
      const text = await res.text();
      console.error("Respuesta no JSON:", text);
      throw new Error("Respuesta inválida del servidor");
    }

    if (!res.ok) {
      return { success: false, message: data.message || "Error al iniciar sesión" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error en loginUser:", error);
    return { success: false, message: error.message || "Error desconocido" };
  }
};











