<template>
  <div class="row">
    <div class="col-lg-6 card">
      <div class="card-header pb-0">
        <h3>Expenses</h3>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Amount
                </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  Type
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Date
                </th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expense in expenses">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <p>{{ expense.amount }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <table v-for="tag in tags">
                    <tr class="text-xs font-weight-bold mb-0">{{ tag[0].name }}</tr>
                  </table>
                </td>
                <td class="align-middle text-center">
                  <p>{{ expense.date }}</p>
                </td>
                <td class="align-middle">
                  <a href="javascript:;" class="text-secondary font-weight-bold text-xs">Edit</a>
                  <!-- <a
                    href="javascript:;"
                    class="text-secondary font-weight-bold text-xs"
                    >Delete</a
                  > -->
                </td>
              </tr>
            </tbody>
          </table>
          <button data-bs-toggle="modal" data-bs-target="#expenseModal" data-bs-whatever="@mdo"
            class="btn btn-primary d-md-flex mx-auto">Add new</button>
        </div>
      </div>
    </div>
<!-- Expenses Modal -->
    <ExpenseModal></ExpenseModal>

    <div class="col-lg-6 card">
      <div class="card-header pb-0">
        <h3>Income</h3>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Amount
                </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  Type
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Date
                </th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="income in incomes">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <p>{{ income.amount }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">{{ income.type }}</p>
                </td>
                <td class="align-middle text-center">
                  <p>{{ income.date }}</p>
                </td>
                <td class="align-middle">
                  <a href="javascript:;" class="text-secondary font-weight-bold text-xs">Edit</a>
                  <!-- <a
                    href="javascript:;"
                    class="text-secondary font-weight-bold text-xs"
                    >Delete</a
                  > -->
                </td>
              </tr>
            </tbody>
          </table>
          <button data-bs-toggle="modal" data-bs-target="#incomeModal" data-bs-whatever="@fat"
            class="btn btn-primary d-md-flex mx-auto">Add new</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Income Modal -->
  <IncomeModal></IncomeModal>
</template>
  
<script setup>
import { ref } from 'vue'
import budgetData from '../services/budget'
import { useUserStore } from '../stores/users'
import ExpenseModal from '../components/ExpenseModal.vue'
import IncomeModal from '../components/IncomeModal.vue'
let expenses = ref([])
let expensesType = ref([])
let incomes = ref([])
let userId = ref()
let tags = ref([])
let expenseId = ref([])
let NewExpenseAmount = ref()
let NewExpenseType = ref()
let NewExpenseDate = ref()
const user = useUserStore();
function asd() {
  console.log(localStorage.getItem("userId"))
  console.log(Boolean(localStorage.getItem("isLoggedin")))
}
userId.value = localStorage.getItem("userId")

budgetData.getExpensesByUserId(userId.value)
  .then(resp => {
    expenses.value = resp.data
    expenses.value.forEach(element => {
      budgetData.getByExpenseId(element.id)
      .then(resp => {
          expensesType.value = resp.data
          getTags()
        })
        .catch(err => {
          console.log(err);
        })
    });
    //console.log(expenses.value)
  })
  .catch(err => {
    console.log(err);
  })


budgetData.getIncomesByUserId(userId.value)
  .then(resp => {
    incomes.value = resp.data
    //console.log(incomes.value)
  })
  .catch(err => {
    console.log(err);
  })

// budgetData.createExpenses()
//   .then(resp => {
//   })
//   .catch(err => {
//     console.log(err);
//   })

function getTags() {
  expensesType.value.forEach(element => {
    budgetData.getTagById(element.tagId)
      .then(resp => {
        tags.value.push(resp.data)
      })
      .catch(err => {
        console.log(err);
      })
  });
}
console.log(tags.value)
</script>


<style scoped>
#AddButton {
  margin-top: 7px;
}

.row {
  margin: 0px;
}
</style>