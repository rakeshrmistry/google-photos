import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Import DomSanitizer


interface MenuItem {
  title: string;
  path: string;
  icon?: SafeHtml; // Use SafeHtml to safely store SVG content
}


@Component({
  selector: 'app-sidebar',
  imports: [ProgressBarComponent, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems: MenuItem[];


  constructor(private sanitizer: DomSanitizer) {  // Inject DomSanitizer
    this.menuItems = [
      {
        title: 'Photos',
        path: 'photos',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
             <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"></path></svg> 

        `)
      },
      {
        title: 'Explore',
        path: 'explore',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
             <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path></svg>
        `)
      },
      {
        title: 'Sharing',
        path: 'sharing',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
    <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path></svg>
        `)
      },
   
      {
        title: 'Favorites',
        path: 'favorites',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
    <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>
        `)
      },
      {
        title: 'Albums',
        path: 'albums',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
     <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h6v7l2.5-1.88L17 11V4h1v16zm-4.33-6L17 18H7l2.5-3.2 1.67 2.18 2.5-2.98z"></path></svg>
        `)
      },
      {
        title: 'Documents',
        path: 'documents',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>
        `)
      },
      {
        title: 'Utilities',
        path: 'utilities',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
    <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></svg>
        `)
      },
      {
        title: 'Archive',
        path: 'archive',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
   <svg width="24px" height="24px" class="v1262d" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm8-5.35V9.5h-2v4.15l-1.79-1.79-1.42 1.41L12 17.48l4.21-4.21-1.42-1.41z"></path></svg>
        `)
      },
      {
        title: 'Locked-Folder',
        path: 'locked-folder',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg width="24px" height="24px" class="v1262d lkhf8e" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
        `)
      },
      {
        title: 'Trash',
        path: 'trash',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
     <svg width="24px" height="24px" class="v1262d" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
        `)
      },
      {
        title: 'Storage',
        path: 'storage',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
    <svg width="24px" height="24px" class="v1262d" viewBox="0 0 24 24"><path d="M17.5 19h-10A5.51 5.51 0 0 1 2 13.5c0-2.76 2.09-5.09 4.78-5.44A5.975 5.975 0 0 1 12 5c2.97 0 5.45 2.18 5.92 5.02A4.5 4.5 0 0 1 22 14.5c0 2.48-2.02 4.5-4.5 4.5zM12 7a4 4 0 0 0-3.67 2.41l-.25.59-.64.01A3.51 3.51 0 0 0 4 13.5C4 15.43 5.57 17 7.5 17h10a2.5 2.5 0 0 0 0-5H16v-1c0-2.21-1.79-4-4-4z"></path></svg>
        `)
      }


      

    ];
  }




}
