💡 Ejemplo de organización recomendada:

- layout/ → Contiene main-layout.component.ts con el header y footer.

- features/auth/ → Maneja login y autenticación.

- features/dashboard/ → Solo contiene funcionalidades del dashboard, sin manejar la estructura global.

- pages/main/ → Renderiza main-layout y usa router-outlet para mostrar contenido dinámico.

- pages/login/ → Llama al módulo features/auth directamente.