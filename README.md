Get-EventLog -LogName * -ErrorAction SilentlyContinue | Where-Object { $_.LogName -ne $null } | ForEach-Object { Clear-EventLog -LogName $_.LogName -ErrorAction SilentlyContinue }
