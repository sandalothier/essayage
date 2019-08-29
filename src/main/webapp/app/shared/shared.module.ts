import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EssayageSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EssayageSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EssayageSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EssayageSharedModule {
  static forRoot() {
    return {
      ngModule: EssayageSharedModule
    };
  }
}
