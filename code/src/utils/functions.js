import api from "@/services/api";
import Cookies from "js-cookie"
import { useRouter } from "next/router";

export const LoginVerify = async () => {

  const authToken = Cookies.get('auth');

  try {
    if (authToken) {
      const response = await fetch(`${api}verify`, {
        method: 'POST',
        body: JSON.stringify({ token: authToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
          return true;
        } else {
          Cookies.remove('auth');
          return false;
        }
      } else {
        Cookies.remove('auth');
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error('Erro de rede:', error);
    return false;
  }
};