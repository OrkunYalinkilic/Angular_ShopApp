import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';

@NgModule({  // Modell klasörü altındaki kullanılacak her şey model.module.ts de bu kısımda eklenir. Module mantığı hep böyledir.
    imports: [HttpClientModule],
    providers:[RestService,ProductRepository,CategoryRepository]
})

export class ModelModule { }