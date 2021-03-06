import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonelListComponent } from '../shared/pages/personel/personel-list/personel-list.component';
import { PersonelEditComponent } from '../shared/pages/personel/personel-edit/personel-edit.component';
import { KodListComponent } from '../shared/pages/kod/kod-list/kod-list.component';
import { KurumListComponent } from '../shared/pages/kurum/kurum-list/kurum-list.component';
import { BirimListComponent } from '../shared/pages/birim/birim-list/birim-list.component';
import { IlListComponent } from '../shared/pages/il/il-list/il-list.component';
import { IsyeriListComponent } from '../shared/pages/isyeri/isyeri-list/isyeri-list.component';
import { KonumListComponent } from '../shared/pages/konum/konum-list/konum-list.component';
import { PersonelTuruListComponent } from '../shared/pages/personelturu/personel-turu-list/personel-turu-list.component';
import { OkulListComponent } from '../shared/pages/okul/okul-list/okul-list.component';
import { ParametreListComponent } from '../shared/pages/parametre/parametre-list/parametre-list.component';
import { HataListComponent } from '../shared/pages/log/hata/hata-list/hata-list.component';
import { IslemListComponent } from '../shared/pages/log/islem/islem-list/islem-list.component';
import { UserListComponent } from '../shared/pages/log/user/user-list/user-list.component';
import { DinamikComponent } from '../shared/pages/dinamik/dinamik.component';
import { RolListComponent } from '../shared/pages/rol/rol-list/rol-list.component';
import { RolGrupListComponent } from '../shared/pages/rolgrup/rol-grup-list/rol-grup-list.component';
import { KullaniciListComponent } from '../shared/pages/kullanici/kullanici-list/kullanici-list.component';
import { RaporKodListComponent } from '../shared/pages/rapor/rapor-kod-list/rapor-kod-list.component';
import { RaporPersonelListComponent } from '../shared/pages/rapor/rapor-personel-list/rapor-personel-list.component';

const routes: Routes = [
    {
        path: '', data: { title: 'Personel ??zl??k' },
        children: [
            {
                path: 'PYSPersonel', component: PersonelListComponent, data: { title: '??zl??k Bilgileri' },
            },
            {
                path: 'PYSPersonelEdit', component: PersonelEditComponent, data: { title: '??zl??k Detay Bilgileri' },
            }
        ]
    },
    {
        path: '', data: { title: 'Genel Tan??mlamalar' },
        children: [
            { path: 'PYSKod', component: KodListComponent, data: { title: 'Kod Listesi' } },
            { path: 'PYSKurum', component: KurumListComponent, data: { title: 'Kurum Bilgileri' } },
            { path: 'PYSParametre', component: ParametreListComponent, data: { title: 'Genel Parametreler' } },
            { path: 'PYSIl', component: IlListComponent, data: { title: '??l-??l??e Bilgileri' } },
            { path: 'PYSIsYeri', component: IsyeriListComponent, data: { title: '???? Yeri Bilgileri' } },
            { path: 'PYSKonum', component: KonumListComponent, data: { title: 'Konum Bilgileri' } },
            { path: 'PYSBirim', component: BirimListComponent, data: { title: 'Birim Bilgileri' } },
            { path: 'PYSPersonelTuru', component: PersonelTuruListComponent, data: { title: 'Personel T??r?? Bilgileri' } },
            { path: 'PYSOgrenim', component: OkulListComponent, data: { title: '????renim Bilgileri' } },
        ]
    },
    {
        path: '', data: { title: 'Log Ekranlar??' },
        children: [
            { path: 'PYSLogKullanici', component: UserListComponent, data: { title: 'Kullan??c?? Log ??zleme' } },
            { path: 'PYSLogHata', component: HataListComponent, data: { title: 'Hata Log ??zleme' } },
            { path: 'PYSLogIslem', component: IslemListComponent, data: { title: '????lem Log ??zleme' } },
        ]
    },
    {
        path: '', data: { title: 'Sistem Ekranlar??' },
        children: [
            { path: 'PYSRol', component: RolListComponent, data: { title: 'Rol Bilgileri' } },
            { path: 'PYSRolGrup', component: RolGrupListComponent, data: { title: 'Rol Grup Bilgileri' } },
            { path: 'PYSKullanici', component: KullaniciListComponent, data: { title: 'Kullan??c?? Bilgileri' } },
        ]
    },
    {
        path: '', data: { title: 'Raporlar' },
        children: [
            { path: 'PYSKodRapor', component: RaporKodListComponent, data: { title: 'Kod Raporlar??' } },
            { path: 'PYSPersonelRapor', component: RaporPersonelListComponent, data: { title: 'Personel Raporlar??' } },
        ]
    },
    {
        path: '', component: DinamikComponent, data: { title: 'Dinamik Web Servisi' }

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }
