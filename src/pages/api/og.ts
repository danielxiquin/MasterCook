// src/pages/api/og.ts
import { ImageResponse } from '@vercel/og';

export async function GET({ request }: { request: Request }) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || 'Ecosys Webpage';
    const client = searchParams.get('client') || 'Giancarlo';
    const date = searchParams.get('date') || '7 de julio de 2025';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f0f23',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#ffffff',
                margin: '0',
                textAlign: 'center',
              }}
            >
              Resumen del Proyecto
            </h1>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#1e293b',
              borderRadius: '16px',
              padding: '40px',
              width: '800px',
              border: '1px solid #334155',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#334155',
                borderRadius: '12px',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  color: '#64748b',
                }}
              >
                Vista previa del proyecto
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8', fontSize: '18px' }}>
                  Nombre del Proyecto:
                </span>
                <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600' }}>
                  {title}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8', fontSize: '18px' }}>
                  Cliente:
                </span>
                <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600' }}>
                  {client}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8', fontSize: '18px' }}>
                  Fecha de inicio:
                </span>
                <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600' }}>
                  {date}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              color: '#64748b',
              fontSize: '14px',
            }}
          >
            master-cook.vercel.app
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '32px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Error generando imagen
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}