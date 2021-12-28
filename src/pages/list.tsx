import {
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { chevronForward } from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer'
import './list.css'

function List() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonBreadcrumbs>
          <IonBreadcrumb href="/home" routerDirection="back">
            Home
            <span slot="separator">
              <IonIcon icon={chevronForward} />
            </span>
          </IonBreadcrumb>
          <IonBreadcrumb>List</IonBreadcrumb>
        </IonBreadcrumbs>
        <ExploreContainer name="List page" />
        <IonButton routerLink="/detail">Go to Detail</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default List
