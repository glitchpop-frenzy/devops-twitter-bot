#!/bin/sh
file=test/coverage_imports.ts
touch file
echo "// Helper files to generate tests for whole project irrespective whether their tests are written or not." >> $file
echo "/*tslint:disable no-unused-vars*/" >> $file
find src -type f \( -iname "*.ts" \) | sort | awk -v package="$1" '{printf "import '\''../%s%s'\'';\n", package, $1}' >> $file
