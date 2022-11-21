# x 의 y 승
# x ** y

# #quiz 1 spa 까지만 출력
# text = 'sparta'
#
# result = text[0:3]
#
# print(result)

# # quiz 2 지역번호만 출력
# phone = '02-123-1234'
#
# result = phone.split('-')[0]
#
# print(result)

# # quiz 3 smith 의 과학점수 출력
# people = [
#     {'name': 'bob', 'age': 20, 'score':{'math':90,'science':70}},
#     {'name': 'carry', 'age': 38, 'score':{'math':40,'science':72}},
#     {'name': 'smith', 'age': 28, 'score':{'math':80,'science':90}},
#     {'name': 'john', 'age': 34, 'score':{'math':75,'science':100}}
# ]
#
# result = people[2]['score']['science']
#
# print(result)

# # enumerate : 번호 매기는거
# people = [
#     {'name': 'bob', 'age': 20},
#     {'name': 'carry', 'age': 38},
#     {'name': 'john', 'age': 7},
#     {'name': 'smith', 'age': 17},
#     {'name': 'ben', 'age': 27},
#     {'name': 'bobby', 'age': 57},
#     {'name': 'red', 'age': 32},
#     {'name': 'queen', 'age': 25}
# ]
#
# for i, person in enumerate(people):
#     name = person['name']
#     age = person['age']
#     print(i, name, age)
#     if i > 3 :
#         break

# # quiz 4 짝수 몇개
# num_list = [1, 2, 3, 6, 3, 2, 4, 5, 6, 2, 4]
#
# cnt = 0
#
# for num in num_list:
#     if num % 2 == 0:
#         cnt += 1
#
# print(cnt)

# # quiz 5 총합
#
# num_list = [1, 2, 3, 6, 3, 2, 4, 5, 6, 2, 4]
#
# value = 0
#
# for num in num_list:
#     value += num
#
# print(value)

# # quiz 6 가장 큰수 출력
#
# num_list = [1, 2, 3, 6, 3, 2, 4, 5, 6, 2, 4]
#
# big = 0
#
# for num in num_list:
#     if num > big:
#         big = num
#
# print(big)

# # quiz 7 주민등록번호로 성별 구하기
#
# def check_gender(pin):
#     gender_pin = pin.split('-')[1][0]
#     if int(gender_pin) % 2 == 0:
#         print('여성')
#     else:
#         print('남성')
#
# my_pin = '200101-2012345'
# check_gender(my_pin)

# # quiz 8 차집합, A 가 듣는 수업 중 B 가 듣지 않는 수업 찾기
# student_a = ['물리2','국어','수학1','음악','화학1','화학2','체육']
# student_b = ['물리1','수학1','미술','화학2','체육']
#
# print(set(student_a) - set(student_b))

# # f-string
#
# scores = [
#     {'name':'영수','score':70},
#     {'name':'영희','score':65},
#     {'name':'기찬','score':75},
#     {'name':'희수','score':23},
#     {'name':'서경','score':99},
#     {'name':'미주','score':100},
#     {'name':'병태','score':32}
# ]
#
# for s in scores:
#     name = s['name']
#     score = str(s['score'])
#     print(name + '의 점수는 ' + score + '점 입니다.')
#     print(f'{name}의 점수는 {score}점 입니다.')

# # 예외처리
#
# people = [
#     {'name': 'bob', 'age': 20},
#     {'name': 'carry', 'age': 38},
#     {'name': 'john', 'age': 7},
#     {'name': 'smith', 'age': 17},
#     {'name': 'ben', 'age': 27},
#     {'name': 'bobby'},
#     {'name': 'red', 'age': 32},
#     {'name': 'queen', 'age': 25}
# ]
#
# for person in people:
#     try:
#         if person['age'] > 20:
#             print (person['name'])
#     except:
#         print(person['name'], '에러입니다.')

# # if문 짧게
#
# num = 3
#
# result = ('짝수' if num % 2 == 0 else '홀수')
#
# print(f'{num}은 {result}입니다.')

# # for 문 짧게
#
# a_list = [1,3,2,5,1,2]
#
# b_list = []
#
# b_list = [a * 2 for a in a_list]
#
# print(b_list)

# # map : 리스트의 모든 원소를 조작하기, lambda 식 : 한줄짜리 함수를 굳이 함수로 만들지않고 깔끔하게 정리하는데 도움을 주는 표현식?, fitler : map과 유사, True 인 것들만 뽑기
#
# people = [
#     {'name': 'bob', 'age': 20},
#     {'name': 'carry', 'age': 38},
#     {'name': 'john', 'age': 7},
#     {'name': 'smith', 'age': 17},
#     {'name': 'ben', 'age': 27},
#     {'name': 'bobby', 'age': 57},
#     {'name': 'red', 'age': 32},
#     {'name': 'queen', 'age': 25}
# ]
#
# result = filter(lambda  x: x['age'] > 20, people)
#
# # people 을 돌면서 check_adult 에 넣어라,
# print(list(result)) #  그리고 그 결과값을 다시 list 로 묵은거

# class Monster():
#     hp = 100
#     alive = True
#
#     def damage(self, attack):
#         self.hp = self.hp - attack
#         if self.hp < 0:
#             self.alive = False
#
#     def status_check(self):
#         if self.alive:
#             print('살았따')
#         else:
#             print('죽었따')
#
#
# m1 = Monster() # m1 을 인스턴스라고 한다.
# m1.damage(150)
# m1.status_check()
#
# m2 = Monster()
# m2.damage(90)
# m2.status_check()