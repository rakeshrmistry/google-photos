import { Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SharingComponent } from './pages/sharing/sharing.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { LockedfolderComponent } from './pages/lockedfolder/lockedfolder.component';
import { TrashComponent } from './pages/trash/trash.component';
import { StorageComponent } from './pages/storage/storage.component';

export const routes: Routes = [
    
  //default router
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
    {
    path:'photos', 
    title:'Photos', 
    component: PhotosComponent
 },
 {
    path:'explore',
    title:'Explore',
    component: ExploreComponent
 },
 {
    path:'sharing',
    title: 'Sharing',
    component: SharingComponent
 },
 {
    path:'favorites',
    title: 'Favorites',
    component: FavoritesComponent
 },
 {
    path:'albums',
    title: 'Albums',
    component: AlbumsComponent
 },
 {
    path:'documents',
    title: 'Documents',
    component: DocumentsComponent
 },

 {
    path:'utilities',
    title: 'Utilities',
    component: UtilitiesComponent
 },

 {
    path:'archive',
    title: 'Archive',
    component: ArchiveComponent
 },
 {
    path:'locked-folder',
    title: 'Locked-Folder',
    component: LockedfolderComponent
 },
 {
    path:'trash',
    title: 'Trash',
    component: TrashComponent
 },
 {
    path:'storage',
    title: 'Storage',
    component: StorageComponent
 }






];
