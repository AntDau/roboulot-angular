import { QualitesProfessionnelle } from './qualitesProfessionnelle.model';
import { Permis } from './permis.model';
import { OrigineOffre } from './origineOffre.model';
import { Contact } from './contact.model';
import { Salaire } from './salaire.model';
import { Competence } from './competence.model';
import { Entreprise } from './entreprise.model';
import { Formation } from './formation.model';
import { LieuTravail } from "./lieuTravail.model"

export interface Offre {
  id: string
  intitule: string
  description: string
  dateCreation: string
  dateActualisation: string
  lieuTravail: LieuTravail
  romeCode: string
  romeLibelle: string
  appellationlibelle: string
  entreprise: Entreprise
  typeContrat: string
  typeContratLibelle: string
  natureContrat: string
  experienceExige: string
  experienceLibelle: string
  formations: Formation[]
  permis: Permis[]
  competences: Competence[]
  salaire: Salaire
  dureeTravailLibelle: string
  dureeTravailLibelleConverti: string
  alternance: boolean
  contact: Contact
  nombrePostes: number
  accessibleTH: boolean
  qualificationCode: string
  qualificationLibelle: string
  secteurActivite: string
  secteurActiviteLibelle: string
  qualitesProfessionnelles: QualitesProfessionnelle[]
  origineOffre: OrigineOffre
  offresManqueCandidats: boolean
}
