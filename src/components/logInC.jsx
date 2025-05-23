import { useState, useEffect } from 'react';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

const Decoration = () => {
  return (
    <div className="absolute -z-10 inset-0 overflow-hidden opacity-70 pointer-events-none">
      <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#D94F4F]/20 to-transparent blur-3xl" />
      <div className="absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#6B8E23]/20 to-transparent blur-3xl" />
    </div>
  );
};

const Loader = () => (
  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function LoginWithGoogle() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Configuración del backend
  const API_BASE_URL = 'https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io';
  const GOOGLE_CLIENT_ID = '881859997618-53q6ira3lf17me66lhj4kpk0q4bb25n1.apps.googleusercontent.com';

  useEffect(() => {
    loadGoogleScript();
  }, []);

  const loadGoogleScript = () => {
    if (document.getElementById('google-identity-script')) {
      initializeGoogleSignIn();
      return;
    }
    
    const script = document.createElement('script');
    script.id = 'google-identity-script';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleSignIn;
    script.onerror = () => {
      console.error('Error cargando Google Identity Services');
      setError('Error cargando Google Sign-In');
    };
    document.head.appendChild(script);
  };

  const initializeGoogleSignIn = () => {
    if (window.google && window.google.accounts) {
      try {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        });
        console.log('Google Sign-In inicializado correctamente');
      } catch (error) {
        console.error('Error inicializando Google Sign-In:', error);
        setError('Error configurando Google Sign-In');
      }
    } else {
      console.error('Google Identity Services no disponible');
      setError('Google Sign-In no está disponible');
    }
  };

  const handleGoogleResponse = async (response) => {
    if (!response.credential) {
      setError('No se recibió credencial de Google');
      return;
    }

    setIsGoogleLoading(true);
    setError(null);

    try {
      console.log('Enviando credencial a backend...');
      
      const backendResponse = await fetch(`${API_BASE_URL}/api/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          credential: response.credential 
        }),
      });

      const data = await backendResponse.json();
      console.log('Respuesta del backend:', data);

      if (!backendResponse.ok) {
        throw new Error(data.error || data.message || 'Error al iniciar sesión con Google');
      }

      if (data.success) {
        // Simular almacenamiento de tokens (en un entorno real usarías localStorage/sessionStorage)
        console.log('Tokens guardados:', {
          access_token: data.access_token,
          user: data.user
        });

        setSuccess(true);
        
        setTimeout(() => {
          console.log('Redirigiendo a dashboard...');
          // Aquí iría la navegación real
          alert('¡Login exitoso! En una app real, serías redirigido al dashboard.');
        }, 2000);
      } else {
        throw new Error(data.error || 'Error en la autenticación');
      }
      
    } catch (err) {
      console.error('Error en Google login:', err);
      setError(err.message || 'Error al iniciar sesión con Google');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    if (window.google && window.google.accounts) {
      try {
        window.google.accounts.id.prompt();
      } catch (error) {
        console.error('Error al mostrar Google Sign-In:', error);
        setError('Error al iniciar Google Sign-In');
      }
    } else {
      setError('Google Sign-In no está disponible. Recarga la página e intenta de nuevo.');
    }
  };

  const handleTraditionalLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor ingresa email y contraseña');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log('Iniciando login tradicional...');
      
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim(), 
          password: password 
        }),
      });

      const data = await response.json();
      console.log('Respuesta login tradicional:', data);

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Error al iniciar sesión');
      }

      // Simular almacenamiento de tokens (en un entorno real usarías localStorage/sessionStorage)
      console.log('Tokens guardados:', {
        access_token: data.access_token,
        user: data.user
      });

      setSuccess(true);
      
      setTimeout(() => {
        console.log('Redirigiendo a dashboard...');
        // Aquí iría la navegación real
        alert('¡Login exitoso! En una app real, serías redirigido al dashboard.');
      }, 2000);
      
    } catch (err) {
      console.error('Error en login tradicional:', err);
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading && !success && email.trim() && password) {
      handleTraditionalLogin(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <Decoration />
      
      <div className="w-full max-w-md bg-white rounded-xl border border-[#e0dfdf] overflow-hidden transform transition-all duration-300 hover:shadow-lg">
        <div className="px-8 pt-8 pb-6 border-b border-[#E5E5E5]">
          <h1 className="text-2xl font-bold text-[#333333] mb-2">Inicia sesión</h1>
          <p className="text-[#666666]">Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>
        
        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-[#D94F4F]/10 border border-[#D94F4F]/20 rounded-lg flex items-center gap-3 text-[#D94F4F] animate-pulse">
              <AlertCircle size={18} />
              <p>{error}</p>
            </div>
          )}
          
          {success && (
            <div className="mb-6 p-4 bg-[#6B8E23]/10 border border-[#6B8E23]/20 rounded-lg flex items-center gap-3 text-[#6B8E23]">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p>¡Sesión iniciada correctamente! Redirigiendo...</p>
              </div>
            </div>
          )}

          {/* Botón de Google Sign-In */}
          <div className="mb-6">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isGoogleLoading || success}
              className={`w-full flex items-center justify-center gap-3 py-3 px-4 border border-[#E5E5E5] rounded-lg transition-all duration-300 ${
                isGoogleLoading || success
                  ? 'bg-gray-50 cursor-not-allowed opacity-70'
                  : 'bg-white hover:bg-gray-50 hover:border-[#D5D5D5] shadow-sm hover:shadow-md'
              }`}
            >
              {isGoogleLoading ? (
                <Loader />
              ) : (
                <>
                  <GoogleIcon />
                  <span className="text-[#333333] font-medium">Continuar con Google</span>
                </>
              )}
            </button>
          </div>

          {/* Separador */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E5E5]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#666666]">O continúa con</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-[#333333]">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#666666]">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="correo@ejemplo.com"
                  className="block w-full pl-10 pr-3 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none text-[#333333] placeholder:text-[#999999] transition-all duration-200"
                  disabled={isLoading || success}
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-[#333333]">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#666666]">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-3 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none text-[#333333] transition-all duration-200"
                  disabled={isLoading || success}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-[#6B8E23] focus:ring-[#6B8E23] border-[#E5E5E5] rounded"
                  disabled={isLoading || success}
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-[#666666]">
                  Recordarme
                </label>
              </div>
              <a href="#" className="text-sm text-[#6B8E23] hover:text-[#566f1c] transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            
            <button
              type="button"
              onClick={handleTraditionalLogin}
              disabled={isLoading || success || !email.trim() || !password}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                isLoading || success || !email.trim() || !password
                  ? 'bg-[#D94F4F]/70 text-white cursor-not-allowed' 
                  : 'bg-[#D94F4F] text-white hover:bg-[#c04545] shadow-md hover:shadow-lg transform hover:scale-[1.02]'
              }`}
            >
              {isLoading ? (
                <Loader />
              ) : success ? (
                'Sesión iniciada'
              ) : (
                <>
                  <span>Iniciar sesión</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#666666]">
              ¿No tienes una cuenta?{' '}
              <a href="#" className="font-medium text-[#6B8E23] hover:text-[#566f1c] transition-colors">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}