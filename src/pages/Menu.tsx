import { 
    IonAlert, 
    IonButton, 
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonItem, 
    IonMenu, 
    IonMenuButton, 
    IonMenuToggle, 
    IonPage, 
    IonRouterOutlet, 
    IonSplitPane, 
    IonTitle, 
    IonToast, 
    IonToolbar, 
    useIonRouter
  } from '@ionic/react';
  import { homeOutline, logOutOutline, rocketOutline, settingsOutline } from 'ionicons/icons';
  import { Redirect, Route } from 'react-router';
  import Home from './Home';
  import About from './About';
  import Details from './Details';
  import { supabase } from '../utils/supabaseClient';
  import { useState } from 'react';
  import EditProfile from './EditProfile';
  
  const Menu: React.FC = () => {
    const navigation = useIonRouter();
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
  
    const path = [
      { name: 'Home', url: '/it35-lab/app/home', icon: homeOutline },
      { name: 'About', url: '/it35-lab/app/about', icon: rocketOutline },
      { name: 'Profile', url: '/it35-lab/app/profile', icon: settingsOutline },
    ];
  
    const handleLogout = async () => {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        setShowToast(true);
        setTimeout(() => {
          navigation.push('/it35-lab', 'back', 'replace');
        }, 300);
      } else {
        setErrorMessage(error.message);
        setShowAlert(true);
      }
    };
  
    return (
      <IonPage>
        <IonSplitPane contentId="main">
          <IonMenu contentId="main">
            <IonHeader>
              <IonToolbar style={{ backgroundColor: '#1e2f23' }}>
                <IonTitle style={{ color: '#ffffff' }}>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent
              style={{
                '--background': '#1e2f23',
                color: '#ffffff',
                padding: '1rem',
              }}
            >
              {path.map((item, index) => (
                <IonMenuToggle key={index}>
                  <IonItem
                    routerLink={item.url}
                    routerDirection="forward"
                    style={{
                      backgroundColor: '#2e4b3c',
                      color: '#ffffff',
                      marginBottom: '1rem',
                      borderRadius: '8px',
                      transition: 'background-color 0.3s',
                    }}
                  >
                    <IonIcon icon={item.icon} slot="start" style={{ color: '#ffffff' }} />
                    {item.name}
                  </IonItem>
                </IonMenuToggle>
              ))}
<IonButton
  expand="full"
  onClick={handleLogout}
  style={{
    backgroundColor: '#a8e6cf', // Light green background
    color: '#1e2f23',           // Dark text for contrast
    marginTop: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 128, 0, 0.3)', // Greenish shadow
  }}
>
  <IonIcon icon={logOutOutline} slot="start" style={{ color: '#1e2f23' }} />
  Logout
</IonButton>
            </IonContent>
          </IonMenu>
  
          <IonRouterOutlet id="main">
            <Route exact path="/it35-lab/app/home" component={Home} />
            <Route exact path="/it35-lab/app/home/details" component={Details} />
            <Route exact path="/it35-lab/app/about" component={About} />
            <Route exact path="/it35-lab/app/profile" component={EditProfile} />
            <Route exact path="/it35-lab/app">
              <Redirect to="/it35-lab/app/home" />
            </Route>
          </IonRouterOutlet>
  
          {/* IonAlert for displaying login errors */}
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Logout Failed"
            message={errorMessage}
            buttons={['OK']}
          />
  
          {/* IonToast for success message */}
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Logout Successful"
            duration={1500}
            position="top"
            color="primary"
          />
        </IonSplitPane>
      </IonPage>
    );
  };
  
  export default Menu;
  