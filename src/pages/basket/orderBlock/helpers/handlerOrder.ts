import { toast } from 'react-toastify';

export default function handleOreder() {
  toast.success(
    `Thank you for order! \n The nearest delivery time is 999 years 🐾`,
    {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    }
  );
}
