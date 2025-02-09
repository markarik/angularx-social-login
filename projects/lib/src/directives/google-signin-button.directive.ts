import {Directive, ElementRef, Input} from '@angular/core';
import { take } from 'rxjs';
import { SocialAuthService } from '../socialauth.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'asl-google-signin-button',
})
export class GoogleSigninButtonDirective {
  @Input()
  type : 'icon' | 'standard' = 'icon';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  constructor(
    el: ElementRef,
    socialAuthService: SocialAuthService
  ) {
    socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(el.nativeElement, {
        type: this.type,
        size: this.size,
      });
    })
  }
}
