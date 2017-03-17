firewall-cmd --zone=public --add-service=https --permanent
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --reload
cp  cmudsc.service /etc/systemd/system/cmudsc.service
systemctl daemon-reload
systemctl enable cmudsc.service
systemctl start cmudsc.service
