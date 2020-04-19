import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `<div>
                <h2>PAGE NOT FOUND</h2>
                <h2>404</h2>
            </div>`,
  styles: [`div {
              margin: 200px auto 0;
              width: 100%;
              max-width: 1200px;

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              }
            h2 {
              font-size: 7rem;
              font-weight: 700;
            }`]
})
export class NotfoundComponent {}
