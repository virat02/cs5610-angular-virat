/**
 * Imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ColumnComponent } from './layout-editor/column/column.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { PageColumnComponent } from './page-column/page-column.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from './layout-editor/page/page.component';
import { RowComponent } from './layout-editor/row/row.component';
import { WebsiteListComponent } from './website-list/website-list.component';
import { PageRowComponent } from './page-row/page-row.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageEditorComponent } from './page-editor/page-editor.component';
import { WidgetToolbarComponent } from './layout-editor/widgets/widget-toolbar/widget-toolbar.component';
import { WidgetEditorComponent } from './layout-editor/widgets/widget-editor/widget-editor.component';
import { WidgetComponent } from './layout-editor/widgets/widget/widget.component';
import { ParagraphComponent } from './layout-editor/widgets/paragraph/paragraph.component';
import { HeadingComponent } from './layout-editor/widgets/heading/heading.component';
import { ColumnToolbarComponent } from './column-toolbar/column-toolbar.component';

/**
 * Providers
 */
import PageService from './services/PageService';
import UserService from './services/UserService';
import WebsiteService from './services/WebsiteService';
import LayoutService from './services/LayoutService';
import CourseNavigatorServiceClient from './services/CourseNavigatorServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColumnComponent,
    LessonListComponent,
    PageColumnComponent,
    RegisterComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    PageComponent,
    RowComponent,
    WebsiteListComponent,
    PageRowComponent,
    PageListComponent,
    PageEditorComponent,
    WidgetToolbarComponent,
    WidgetEditorComponent,
    WidgetComponent,
    ParagraphComponent,
    HeadingComponent,
    ColumnToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    PageService,
    UserService,
    WebsiteService,
    LayoutService,
    CourseNavigatorServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
