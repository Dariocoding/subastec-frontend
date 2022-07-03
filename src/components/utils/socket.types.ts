export const SocketTypes = {
	ADDAUTOPUJA: 'add-autopuja',
	SENDPUJA: 'subasta-puja',
	GETAUTOPUJA: 'get-autopuja',
	DETENER_AUTO_PUJA: 'stop-auto-puja',
	GETPUJASUBASTA: (subastaid: number) => `subasta-${subastaid}-puja`,
};
