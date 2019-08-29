import { NgModule } from '@angular/core';

import { EssayageSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [EssayageSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [EssayageSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EssayageSharedCommonModule {}
