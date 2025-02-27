import nodemailer from "nodemailer";

export const createTransport = (config: nodemailer.TransportOptions) => {
	return nodemailer.createTransport(config);
};
