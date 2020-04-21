import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  //TestBed специальная утилита для тестов

  //Так как для тестов важно что бы компонент скомпилировался раньше чем через метод createComponent будут созданы его экземпляры
  //то первый beforeEach где происходит настройка TestBed и компиляция компонента помещается в async метод
  //(код будет выполнятся в специальной асинхронной срере)
  //и следующий beforeEach не будет выполняться пока не завершится beforeEach с async

  beforeEach(async(() => {
    TestBed.configureTestingModule({ //configureTestingModule задаёт конфигурацию для TestBed
      declarations: [ LoginComponent ]
    })
    .compileComponents(); //Делает вынесенные из ts файла стили и шаблон встроенными в ts файл
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'app'`, () => {
    expect(component.title).toEqual('app');
  });
  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('Welcome to app!');
  });
});
