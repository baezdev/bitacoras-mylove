import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export function createToast ({ message, color }) {
  const colors = {
    pink: '#ec4899',
    purple: '#a855f7'
  }

  Toastify({
    text: message,
    style: {
      background: colors[color],
      borderRadius: '4px'
    },
    duration: 2000,
    stopOnFocus: true
  }).showToast()
}
