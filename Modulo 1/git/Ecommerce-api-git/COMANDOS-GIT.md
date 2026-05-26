# COMANDNOS GIT

..
# Visualizar cambios
git status
# Comprometer todos los cambios
git add .
# Comprometer los cambios especificos
git add archivo deseado
# Subir cambios de manera local
git commit
# Subir cambios de manera local añadiendo un comentario
git commit -m "comentarios"
# Subir cambios al repositorio a la rama en que estemos
git push
# Subir cambios al repositorio indicandole en que rama
git push origin (rama)

# Consultar logs

git log
git log --oneline
git config user.email
git log --oneline --graph --all
git log --stat
git log -p
git log --oneline -10
git log --author="yochanperezperez@gmail.com"

# Por fecha

git log --after="2026-01-01"
git log --before="2026-04-01"
git log --after="2026-01-01" before="2026-04-01"
git log .\main.py

# Consultar git especifico
git show b3e0289ec991dfb185fbc4e10927623ad1213277
git show b3e0289ec991dfb185fbc4e10927623ad1213277 --name-only
git show b3e0289ec991dfb185fbc4e10927623ad1213277 --stat
git show b3e0289ec991dfb185fbc4e10927623ad1213277:services/order_service.py
gi ls-tree b3e0289ec991dfb185fbc4e10927623ad1213277
git diff b3e0289ec991dfb185fbc4e10927623ad1213277

# Modificar el último commit

git commit --amend -m "feat

# ver ramas locales y remotas

git branh -a

# Crear rama

git branch FEATURE/RAMA-NUEVA

# Cambiar de rama

git switch FEATURE/RAMA-NUEVA



# Configuraciones 

git config --global user.name "yochanperez"
git config --global user.email "yochanperez@gmail.com"
git config --global core.editor "code -wait"
git config --global initdefaultBranch main"
...