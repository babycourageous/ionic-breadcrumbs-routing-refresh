import {
  IonBreadcrumb,
  IonBreadcrumbs,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { chevronForward } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import ExploreContainer from '../components/ExploreContainer'
import './detail.css'

function Detail() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Detail</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonBreadcrumbs>
          <IonBreadcrumb href="/home" routerDirection="back">
            Home
            <span slot="separator">
              <IonIcon icon={chevronForward} />
            </span>
          </IonBreadcrumb>
          <IonBreadcrumb href="list" routerDirection="back">
            List
            <span slot="separator">
              <IonIcon icon={chevronForward} />
            </span>
          </IonBreadcrumb>
          <IonBreadcrumb>Detail</IonBreadcrumb>
        </IonBreadcrumbs>
        <ExploreContainer name="Detail page" />
      </IonContent>
    </IonPage>
  )
}

export default Detail
