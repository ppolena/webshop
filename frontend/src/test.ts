// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

describe('AppComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ]
      }).compileComponents();
    }));

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
