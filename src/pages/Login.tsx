import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          '--background': '#1e2f23', // dark green palette
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
          height: '100vh', // Full height of the screen
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '400px', // Set a max width for the card
            padding: '2rem',
            background: '#2e4b3c',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the contents inside the card
            justifyContent: 'center', // Ensure vertical centering in the card
            margin: 'auto', // Ensure the card is centered in the available space
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <IonAvatar style={{ margin: '0 auto', width: '100px', height: '100px' }}>
              <img
                src="https://i.pinimg.com/736x/35/d2/6f/35d26f03cdb50d3e83eb597df4281880.jpg"
                alt="Logo"
                style={{ width: '100%', height: '100%' }}
              />
            </IonAvatar>
            <h2 style={{ marginTop: '1rem', color: '#ffffff' }}>Sign in to your account</h2>
          </div>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            style={{ marginBottom: '1rem', color: '#ffffff' }}
            className="custom-input"
          />

          <IonInput
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            style={{ marginBottom: '1.5rem', color: '#ffffff' }}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton onClick={doLogin} expand="block" shape="round" color="success">
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="block"
            fill="clear"
            shape="round"
            style={{ color: '#ffffff', marginTop: '1rem' }}
          >
            Don't have an account? Register here
          </IonButton>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
