import React from "react";

// type ListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };

/* Generic Type : Parameterized types */
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// const List = ({ items, onClick }: ListProps) => {
// const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
// const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          //   <div key={index} onClick={() => onClick(item)}>
          //     {item}
          //   </div>
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

export default List;

/*  
    제네릭(Generics)
    - 함수에서 매개변수의 타입이 바뀌었는데도, 동일한 함수를 재사용하고 싶은 경우
        - function getSize (arr: number[] | string[] | boolean [] | object []) :number {
            return arr.length;
        }

        - <T>: 타입 파라미터 
            - 예제 1)
                function getSize<T> (arr: T[]) :number {
                    return arr.length;
                }

                const arr1 = [1,2,3];
                getSize<number>(arr1) // 3

                const arr1 = ['a', 'b', 'c'];
                getSize<string>(arr1) // 3

                const arr1 = ['true', 'false', 'true'];
                getSize<boolean>(arr1) // 3
            
            - 예제 2) 
                interface Mobile<T> {
                    name: string;
                    price: number
                    option: T
                }

                 interface m1:Mobile<object> {
                    name: string;
                    price: number
                    option: {
                        color: 'red',
                        coupon: false,
                    }
                }

                interface m1:Mobile<{color: string; coupon: boolean}> {
                    name: string;
                    price: number
                    option: {
                        color: 'red',
                        coupon: false,
                    }
                }

                 interface m2: Mobile<string> {
                    name: string;
                    price: number
                    option: "good"
                }

            - 예제 3) 
                interface User {
                    name: string
                    age: number
                }

                interface Car {
                    name: string
                    color: string
                }

                interface Book {
                    price: number
                }

                const user: User = {name:'Lucky', age: 25};
                const car: Car = {name: 'bmw'm color: 'green'};
                const book: Book = {price: 3000}

                function showName<T extends {name: string}>(data: T): string {
                    return data.name
                }
                
                showName(user);
                showName(car); // ERROR
                showName(book); // ERROR


    - 제네릭을 사용하면 클래스나 함수 인터페이스를 다양한 타입으로 사용할 수 있습니다. 
    - 선언할 때는 일단 타입 파라미터만 적어주고, 생성하는 시점에 사용하는 타입을 결정
    - 제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다. 
    - 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.
    - 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미합니다.
*/
