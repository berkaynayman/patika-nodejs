const { writeFile, readFile, mkdir, rmdir } = require('fs')

mkdir('Employees',
     {recursive: true},
     (err) => {
        if(err) console.log(err)
        console.log('Klasör Oluşturuldu')
     }
    )

writeFile('Employees/employees.json',
          '{"name": "Employeee 1 Name", "salary": 2000 }',
          (err) => {
              if(err) console.log(err)
              console.log("Veri Eklendi..")
          }
        )
    
readFile('Employees/employees.json',
         'utf-8',
         (err, data) => {
            if(err) console.log(err)
            console.log(data)
            console.log("Dosya Okundu..")
         }
        )


setTimeout(() => {
    rmdir('Employees',
        { recursive: true},
        (err) => {
            if(err) console.log(err)
            console.log('Klasör Silindi.. :)');
        }
    )
}, 5000)