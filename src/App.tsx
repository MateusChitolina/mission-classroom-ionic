import {
  IonApp,
  IonContent,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* import '@ionic/react/css/palettes/dark.system.css'; */

/* Theme variables */
import { useEffect, useState } from 'react';
import ClassCard from './components/classBox/ClassCard';
import Header from './components/Header';
import api from './services/Api';
import './theme/variables.css';

setupIonicReact();

interface ClassroomObject {
  title: string,
  description: string,
  auxiliarLabel: string,
  topBackgroundSrc: string,
  userImageSrc: string,
  classroomAssignments: [
    {
      id: string,
      topLabel: string,
      bottomLabel: string
    }
  ]
}

interface ClassroomUserObject {
  profileImageSrc: string,
}

const App: React.FC = () => {
  const [classroomObject, setClassroomObject] = useState<ClassroomObject[]>([]);
  const [profileImageSrc, setProfileImageSrc] = useState<ClassroomUserObject>({"profileImageSrc": ""});

  useEffect(() => {
      reloadList();
      getProfileImageSrc();
  }, []);

  const reloadList = async () => {
      try {
        const response = await api.get("/classroom/search-all?userId=????????");
        setClassroomObject(response.data as ClassroomObject[]);
      } catch (error) {
        console.error("Erro ao realizar a requisição para a api. Detalhes:\n" + error);
      }
  };

  const getProfileImageSrc = async () => {
    try {
      const response = await api.get("/classroom/user/profile-image/search?userId=????????");
      setProfileImageSrc(response.data as ClassroomUserObject);
      console.log(response.data)
    } catch (error) {
      console.error("Erro ao realizar a requisição para a api. Detalhes:\n" + error);
    }
};
  
  const renderClassBoxComponent = () => {
    return (
      <>
        {classroomObject.map((classroomObject: ClassroomObject) => (
          <ClassCard 
            key={`${classroomObject.title}-${classroomObject.auxiliarLabel}`}
            title={classroomObject.title} 
            description={classroomObject.description} 
            classGroup={classroomObject.auxiliarLabel} 
            topBackgroundSrc={classroomObject.topBackgroundSrc} 
            userImageSrc={classroomObject.userImageSrc} 
            assignments={classroomObject.classroomAssignments} 
          />
        ))}
      </>
    );
  }

  return (
    <IonApp>
      <IonReactRouter>
      <Header profileImageSrc={profileImageSrc.profileImageSrc} />
        <IonContent className="ion-padding">
        {renderClassBoxComponent()}
        </IonContent>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
